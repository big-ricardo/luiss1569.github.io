import * as React from "react";
import {
  Container,
  Section,
  InputComponent,
  FormContainer,
  Button,
  LoadingComponent,
  SectionImg,
} from "./style";
import Lottie from "react-lottie";
import animationData from "../../../lotties/email.json";
import animationDataEmailSucess from "../../../lotties/sendMessageSucess.json";
import axios from "axios";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";

export default function BasicTextFields() {
  const formsDefault = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",
  };
  const [forms, setForms] = React.useState({ ...formsDefault });
  const [formsStatus, setFormsStatus] = React.useState({
    error: true,
    success: false,
    submitting: false,
    loading: false,
    failed: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    validationForm(name, value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormsStatus((prev) => ({ ...prev, submitting: true }));
    const { name, email, message } = forms;
    if (formsStatus.error) {
      validationForm("name", name);
      validationForm("email", email);
      validationForm("message", message);
      return;
    }

    setFormsStatus((prev) => ({ ...prev, loading: true }));
    setTimeout(() => {
      setFormsStatus((prev) => ({ ...prev, loading: false }));
    }, 10000);
    const response = await axios
      .post("/api/forms", { name, email, message })
      .then(() => {
        setFormsStatus((prev) => ({ ...prev, success: true, loading: false }));
      })
      .catch(() => {
        setFormsStatus((prev) => ({ ...prev, loading: false, failed: true }));
      });
  }

  function removeErro() {
    setForms({ ...forms, nameError: "", emailError: "", messageError: "" });
  }

  function revalidationForm() {
    const { name, email, message } = forms;
    if (name != "") {
      validationForm("name", name);
    }
    if (email != "") {
      validationForm("email", email);
    }
    if (message != "") {
      validationForm("message", message);
    }
  }

  function validationForm(name, value) {
    switch (name) {
      case "name":
        if (value === "") {
          setForms((prev) => ({
            ...prev,
            [name]: value,
            nameError: "Campo obrigatório",
          }));
        } else if (value?.length < 3) {
          setForms((prev) => ({
            ...prev,
            [name]: value,
            nameError: "Nome deve conter mais de 3 caracteres",
          }));
        } else {
          setForms((prev) => ({ ...prev, [name]: value, nameError: "" }));
        }
        break;
      case "email":
        if (value === "") {
          setForms((prev) => ({
            ...prev,
            [name]: value,
            emailError: "Campo obrigatório",
          }));
          break;
        } else if (!value?.includes("@")) {
          setForms((prev) => ({
            ...prev,
            [name]: value,
            emailError: "Email inválido",
          }));
          break;
        } else {
          setForms((prev) => ({ ...prev, [name]: value, emailError: "" }));
        }
        break;
      case "message":
        if (value === "") {
          setForms((prev) => ({
            ...prev,
            [name]: value,
            messageError: "Campo obrigatório",
          }));
        } else if (value?.length < 10) {
          setForms((prev) => ({
            ...prev,
            [name]: value,
            messageError: "A mensagem  deve conter mais de 10 caracteres",
          }));
        } else {
          setForms((prev) => ({ ...prev, [name]: value, messageError: "" }));
        }
        break;
      default:
        break;
    }
  }

  React.useEffect(() => {
    if (
      forms.messageError !== "" ||
      forms.nameError !== "" ||
      forms.emailError !== "" ||
      forms.message === "" ||
      forms.name === "" ||
      forms.email === ""
    ) {
      setFormsStatus((prev) => ({ ...prev, error: true }));
    } else {
      setFormsStatus((prev) => ({ ...prev, error: false }));
    }
  }, [forms?.messageError, forms?.nameError, forms?.emailError]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setFormsStatus((prev) => ({ ...prev, failed: false }));
  };

  return (
    <Container>
      <br />
      <h3 className="title" style={{ marginTop: 0 }}>
        Fale Comigo
      </h3>
      <Section>
        <SectionImg>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            isClickToPauseDisabled
          />
        </SectionImg>
        <FormContainer
          component="form"
          onSubmit={handleSubmit}
          onBlur={removeErro}
          onFocus={revalidationForm}
        >
          <h3 className="simple-title"> Preencha Aqui</h3>
          <InputComponent
            fullWidth
            id="filled-basic"
            label="Nome"
            variant="filled"
            type={"text"}
            autoComplete="off"
            error={forms.nameError !== "" && formsStatus.submitting}
            helperText={formsStatus.submitting ? forms.nameError : ""}
            name="name"
            placeholder="Seu nome completo"
            value={forms.name}
            onChange={handleChange}
          />
          <InputComponent
            fullWidth
            id="filled-basic"
            label="Email"
            variant="filled"
            type={"text"}
            autoComplete="off"
            error={forms.emailError !== "" && formsStatus.submitting}
            helperText={formsStatus.submitting ? forms.emailError : ""}
            name="email"
            placeholder="Seu email para contato"
            value={forms.email}
            onChange={handleChange}
          />
          <InputComponent
            id="filled-textarea"
            label="Mensagem"
            placeholder="Escreva aqui sua mensagem"
            multiline
            fullWidth
            variant="filled"
            rows={4}
            autoComplete="off"
            error={forms.messageError !== "" && formsStatus.submitting}
            helperText={formsStatus.submitting ? forms.messageError : ""}
            name="message"
            value={forms.message}
            onChange={handleChange}
          />
          {!formsStatus.success && (
            <>
              {!formsStatus.loading ? (
                <Button type="submit">Enviar</Button>
              ) : (
                <LoadingComponent />
              )}
            </>
          )}
          {formsStatus.success && (
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: animationDataEmailSucess,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={60}
            />
          )}
        </FormContainer>
      </Section>
      <Snackbar
        open={formsStatus.failed}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="error">Erro ao enviar formulário</Alert>
      </Snackbar>
    </Container>
  );
}
