import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
    return (
        <div className="bg-white p-8">
            <h2 className="text-2xl font-bold mb-6">Planes mensuales:</h2>
            <div className="flex justify-center space-x-4">
                <Card className="w-[350px] bg-[#e6f4ea] shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-center">
                            Basic
                        </CardTitle>
                        <CardDescription className="text-sm text-center">
                            Perfecto para computadoras de oficina y teletrabajo
                            con uso diario de 6-8 horas.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold text-center my-4">
                            USD $15.00
                        </p>
                        <p className="text-sm text-center mb-4">
                            Obtén tus primeros 2 meses a 1$ al mes
                        </p>
                        <Button className="mx-auto mb-4" variant="secondary">
                            Prueba gratis
                        </Button>
                        <div className="text-sm">
                            <p className="font-semibold mb-2">Incluye:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Gestión de casos</li>
                                <li>Gestión de inventario</li>
                                <li>Trackeo para clientes</li>
                                <li>Personalización de entornos</li>
                                <li>1 solo perfil</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-[350px] bg-[#e6f4ea] shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-center">
                            Centrix
                        </CardTitle>
                        <CardDescription className="text-sm text-center">
                            Perfecto para computadoras de oficina y teletrabajo
                            con uso diario de 6-8 horas.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold text-center my-4">
                            USD $50.00
                        </p>
                        <p className="text-sm text-center mb-4">
                            Obtén tus primeros 2 meses a 1$ al mes
                        </p>
                        <Button className="mx-auto mb-4" variant="secondary">
                            Prueba grátis
                        </Button>
                        <div className="text-sm">
                            <p className="font-semibold mb-2">Incluye:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Gestión de casos</li>
                                <li>Gestión de inventario</li>
                                <li>Trackeo para clientes</li>
                                <li>Personalización de entornos</li>
                                <li>5 perfiles</li>
                                <li>Servicio post venta.</li>
                                <li>Pre diagnosticados y bot AI</li>
                                <li>Foro de comunidad</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-[350px] bg-[#e6f4ea] shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-center">
                            Plus
                        </CardTitle>
                        <CardDescription className="text-sm text-center">
                            Perfecto para computadoras de oficina y teletrabajo
                            con uso diario de 6-8 horas.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold text-center my-4">
                            USD $100.00
                        </p>
                        <p className="text-sm text-center mb-4">
                            Obtén tus primeros 2 meses a 1$ al mes
                        </p>
                        <Button className="mx-auto mb-4" variant="secondary">
                            Prueba gratis
                        </Button>
                        <div className="text-sm">
                            <p className="font-semibold mb-2">Incluye:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Gestión de casos</li>
                                <li>Gestión de inventario</li>
                                <li>Trackeo para clientes</li>
                                <li>Personalización de entornos</li>
                                <li>Perfiles limitados</li>
                                <li>Servicio post venta.</li>
                                <li>Pre diagnosticados y bot AI</li>
                                <li>Foro de comunidad</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
