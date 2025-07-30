import { useState, useEffect } from "react";

export default function Countmtl  ()  {

    const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 10);
        const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
            setCount(end);
            clearInterval(timer);
        } else {
            setCount(Math.floor(start));
        }
        }, 10);
        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count.toLocaleString()} +</span>;
    };

    return (
        <div className="flex justify-center items-center space-x-10 py-10 bg-white">
        <div className="text-center">
            <h2 className="text-3xl font-bold"><Counter end={24} duration={2000} /></h2>
            <p className="text-gray-600">Mais de 23 anos a construir relações de confiança.</p>
        </div>
        <div className="border-l border-gray-300 h-20"></div>
        <div className="text-center">
            <h2 className="text-3xl font-bold"><Counter end={2000} duration={2000} /></h2>
            <p className="text-gray-600">Está presente em mais de 570.000 residências.</p>
        </div>
        <div className="border-l border-gray-300 h-20"></div>
        <div className="text-center">
            <h2 className="text-3xl font-bold"><Counter end={150} duration={2000} /></h2>
            <p className="text-gray-600">A Brisanet está presente em mais de 150 cidades do nordeste.</p>
        </div>
        </div>
    );


}

