const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal-case">Hook</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
            <span className="font-normal normal-case">Pir</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className="font-normal normal-case">pir@correo.com</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
            <span className="font-normal normal-case">3 Diciembre de 2022</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, est autem! Ut, cumque commodi accusamus voluptatum ab cupiditate quam laboriosam placeat saepe repudiandae tempora et optio praesentium illum numquam ipsum!</span>
          </p>
        </div>
  )
}

export default Paciente