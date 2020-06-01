import React from 'react';
import illustration from '../imgs/undraw_server_push_vtms.svg'
import Form from './contact.form';

export default () => {
  return (
    <header className="bg-gray-300">
      <div className="container mx-auto p-12 max-w-4xl">
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <h1 className="text-6xl font-bold text-purple-700">¡Hola! Soy David Supo</h1>
            <p className="text-xl font-light">Fullstack Developer</p>
          </div>
          <img src={illustration} alt="Hombre subiendo cambios de un proyecto" style={{height:"300px"}}></img>
        </div>
        
        <div>
          <Form/>
        </div>
        
      </div>      
    </header>
  )
} 