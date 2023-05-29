import React from 'react'
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Home.scss';

export const Home = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', fontFamily: 'Fira Sans Light', color: '#0069A3' }}>Proyect Pabs</h1>
      <h2 style={{ textAlign: 'center', fontFamily: 'Fira Sans Light', color: 'black' }}>Bienvenido al futuro de la mensajería institucional</h2>
      
      <div className="button-container-home">
        <Button href="/login" className="ingresar-button-home" htmlType="submit">
          Iniciar sesión <ArrowRightOutlined />
        </Button>
        &nbsp;&nbsp;
        <Button href="/register" className="custom-button-home" htmlType="submit">
          Registrarse <ArrowRightOutlined />
        </Button>
      </div>
    </>
  );
};
