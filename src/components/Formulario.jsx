import {useState, useEffect} from 'react';
import Error from './error';

const Formulario = ({pacientes, setPacientes}) => {
    
    const [nombre, setNombre] = useState('');
    const [propetario, setPropetario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // validacion formulario

        if([nombre, propetario, email, fecha, sintomas].includes('')){
            console.log('Necesitas llenar todos los datos')
            setError(true);
            return;
        }
        setError(false);

        const objetoPaciente = {
            nombre,
            propetario,
            email,
            fecha,
            sintomas
        }
        setPacientes([...pacientes, objetoPaciente]);

        // reiniciar form

        setNombre('')
        setPropetario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }




    return (
        <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimientos Paciente</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade pacientes y {' '}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
             { error && <Error><p>Todos los campos son obligatorios</p></Error> }
        <div className="mb-5">
            <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input id='mascota' type='text' placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="mb-5">
            <label htmlFor='propetario' className="block text-gray-700 uppercase font-bold">Nombre Propetario</label>
            <input id='propetario' type='text' placeholder="Nombre del Propetario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={propetario} onChange={(e) => setPropetario(e.target.value)} />
        </div>

        <div className="mb-5">
            <label htmlFor='email' className="block text-gray-700 uppercase font-bold">Email</label>
            <input id='email' type='text' placeholder="Email Contacto Propetario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-5">
            <label htmlFor='alta' className="block text-gray-700 uppercase font-bold">Alta</label>
            <input id='alta' type='date' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        </div>

        <div className="mb-5">
            <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea id ='sintomas'  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas" 
            value={sintomas} onChange={(e) => setSintomas(e.target.value)}/>

        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value='Agregar paciente'/>

        </form>
        
        </div>
    )
}
export default Formulario