import { Calendar, Ticket } from "phosphor-react";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const [createSubscriber, {loading}] = useCreateSubscriberMutation()
    
    async function handleSubscribe(event: FormEvent){
        event.preventDefault()
        
       await createSubscriber({
            variables:{
                name,
                email
            }
        })

        navigate('/event')
    }
    return(
        <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                    Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>

                    <div className="pt-10 flex">
                        <div className="pr-6 flex justify-center items-center">
                            <Calendar size={60}/>
                            <p className="flex justify-center text-xl pl-4">De 20 a 26 de junho</p>
                        </div>

                        <div className="pr-6 flex justify-center items-center">
                            <Ticket size={60}/>
                            <p className="flex justify-center text-xl pl-4">Evento inéditos, online e gratuito</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                        onChange={event => setName(event.target.value)}
                         className="bg-gray-900 rounded px-5 h-14"
                        type="text"
                        placeholder="Seu nome completo"
                        />
                        <input 
                        onChange={event => setEmail(event.target.value)}
                        className="bg-gray-900 rounded px-5 h-14"
                        type="email"
                        placeholder="Digite seu email
                        "/>

                        <button type="submit"
                        disabled={loading}
                        className="mt-4 bg-green-500 uppercase py-4 font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
           
        </div>
    )
}