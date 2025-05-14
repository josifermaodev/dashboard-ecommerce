import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";




export default function Sales(){
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center ">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Ultimos clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto h-5 w-5"/>
                </div>
                <CardDescription>
                    Novos cliente nas ultimas 24 horas
                </CardDescription>
            </CardHeader>
            
            <CardContent className="px-6">
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://ik.imagekit.io/q5tv5x3k8/04.jpg?updatedAt=1737472550488"/>
                        <AvatarFallback>JF</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Josiane Fermao</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://ik.imagekit.io/q5tv5x3k8/07.jpg?updatedAt=1737475098608"/>
                        <AvatarFallback>DA</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Diego Alves</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://ik.imagekit.io/q5tv5x3k8/uma%20menina%20ruiva%20com%20sardas%20no%20estilo%20cartoon.png?updatedAt=1740416528828"/>
                        <AvatarFallback>N</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Nick</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                    </div>
                </article>
                
            </CardContent>
        </Card>
    )
}