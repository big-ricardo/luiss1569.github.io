import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content" style={{backgroundColor: 'rgba(50,50,50,0.7)', width: '100%', height: '100%', display:'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        }}>
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Veja aqui
        </a>
      </div>
    </div>
  )
}

export default Card
