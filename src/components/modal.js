import React from "react";
import styled from 'styled-components';

const Modal = ({children, state, change}) =>{
    return(
        <>
            {state &&
                <Overlay>
                    <Contenedor>
                        <Encabezado>
                            <h3>
                                ERROR AL INICIAR SESIÓN
                            </h3>
                        </Encabezado>
                        <Cerrar onClick={()=>change(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </Cerrar>
                        {children}
                    </Contenedor>
                </Overlay>
            }
        </>
    );
}
export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left:0;
    background: rgba(0,0,0,.5);

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Contenedor = styled.div`
    width: 700px;
    min-height: 150px;
    position: relative;
    border-radius: 5px;
    background: #fff;
    
`;

const Encabezado = styled.div`
    
    align-items: center;
    justify-content: space-between;
    
    h3{
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 30px;
        text-align: center;
        
    }
`;

const Cerrar = styled.div`
    position: absolute;
    top: 10px;
    right: 15px;
    
    width: 20px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #000;

    &:hover{
        brackground: #FF0000;
    }

    svg{
        width: 100%;
        height: 100%;
    }
`;