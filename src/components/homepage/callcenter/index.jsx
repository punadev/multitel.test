import React from 'react';
import {Phone } from 'lucide-react';

export function Callcenter(){

    return(
        <div className="bg-[#2b489e] py-20 mb-20" style={{
            backgroundImage: 'url("/callcenter/help.png")',
            backgroundSize: "content",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Phone className="w-8 h-8 text-white" />
                            <span className="text-white font-semibold">Suporte Técnico</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            24/7
                        </h2>
                        <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                            Estamos sempre disponivel a qualquer hora para manter a sua empresa conectada
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}
