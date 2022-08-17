import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import Loader from './loader'

export default function Reserva() {
  const [enviado, setEnviado] = useState(false) 
  const [loading, setLoading] = useState(false) 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const getFormText = formData => {
    return `
      Nome: ${formData.nome}
      Check-in: ${formData.checkin}
      Check-out: ${formData.checkout}
      Adultos: ${formData.adultos}
      Criancas: ${formData.criancas}
      Email: ${formData.email}
      Telefone: ${formData.telefone}
    `
  }

  const getFormHTML = formData => {
    return `
      <div>
      <strong>Nome:</strong> ${formData.nome} </br>
      <strong>Check-in:</strong> ${formData.checkin} </br>
      <strong>Check-out:</strong> ${formData.checkout} </br>
      <strong>Adultos:</strong> ${formData.adultos} </br>
      <strong>Criancas:</strong> ${formData.criancas} </br>
      <strong>Email:</strong> ${formData.email} </br>
      <strong>Telefone:</strong> ${formData.telefone} </br>
      </div>
    `
  }
  
  const onSubmit = formData => {
    setLoading(true)
    let data = {
      text: getFormText(formData),
      html: getFormHTML(formData),
      email: formData.email || 'site@email.com',
      subject: 'Reserva - ' + formData.nome
    }
    
    axios.post('http://localhost:3000/api/email', data).then((res) => {
      setLoading(false)
      setEnviado(true)
    }).catch(
      (e) => {
        setLoading(false)
      }
      
    )
  }

  return (
    <>
    {loading ? 
      <Loader></Loader>
    : <>
    {enviado ? 
      <div className="text-white text-center">
        <p>Sua reserva foi enviada, entraremos em contato</p>
        <button type="button" onClick={() => {setEnviado(false)}} className="w-full focus:outline-none text-white bg-secondary hover:bg-secondaryDark focus:ring-4 focus:ring-secondaryLight font-medium rounded-lg text-sm px-5 py-1.5 mt-2 mb-2 dark:bg-secondary dark:hover:bg-secondaryDark dark:focus:ring-secondaryDark"> Fazer outra reserva </button>
      </div>
      :
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div>
        {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div className="grid grid-cols-3 items-center gap-y-2">
          <label className="text-white">Check-In</label>
          <input type="date" className="col-span-2 text-sm rounded-lg p-1.5 " {...register("checkin", { required: true })} />
          <label className="text-white">Check-Out</label>
          <input type="date" className="col-span-2 text-sm rounded-lg p-1.5 " {...register("checkout", { required: true })} />
          <label className="text-white">Nome</label>
          <input type="text" className="col-span-2 text-sm rounded-lg p-1.5 " {...register("nome", { required: true })} />
          <label className="text-white">Telefone</label>
          <input type="text" className="col-span-2 text-sm rounded-lg p-1.5 " {...register("telefone", { required: true })} />
          <label className="text-white">E-mail</label>
          <input type="text" className="col-span-2 text-sm rounded-lg p-1.5 " {...register("email", { required: false })} />
          <label className="text-white">Adultos</label>
          <select {...register("adultos")}  className="col-span-2 text-sm rounded-lg p-1.5 ">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <label className="text-white">Crianças</label>
          <select {...register("criancas")}  className="col-span-2 text-sm rounded-lg p-1.5 ">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="pl-5 pr-5">
          <button type="submit" className="w-full focus:outline-none text-white bg-secondary hover:bg-secondaryDark focus:ring-4 focus:ring-secondaryLight font-medium rounded-lg text-sm px-5 py-1.5 mt-2 mb-2 dark:bg-secondary dark:hover:bg-secondaryDark dark:focus:ring-secondaryDark"> Enviar </button>
        </div>
    
      </form>
      }
    </>
    }
    </>
  );
}
