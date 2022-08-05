import React from "react";
import { useForm } from "react-hook-form";

export default function Reserva() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div>
        <input defaultValue="test" {...register("example")} />
      </div>
      <div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div>
      <button type="submit" className="focus:outline-none text-white bg-secondary hover:bg-secondaryDark focus:ring-4 focus:ring-secondaryLight font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-secondary dark:hover:bg-secondaryDark dark:focus:ring-secondaryDark"> Enviar </button>

      </div>


   
      
  
    </form>
  );
}
