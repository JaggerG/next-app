"use client"
import { ReactElement, ReactNode, useState } from "react"
import CostInput from "./CostInput"
const priceList = [
    { name: '鸡蛋', price: 1, unit:'个' },
    { name: '牛肉', price: 30, unit: '斤' },
    { name: '肉包', price: 2, unit: '个'},
]
const CostResult = (props:any) => {
    return (
        <>
            <ul>
                {
                    priceList && priceList.map((item, index): ReactElement<any, any> => {
                        const needFixed = parseInt(props.cost) % item.price !== 0
                        const originResult = parseInt(props.cost) / item.price
                        const price = needFixed ? originResult.toFixed(2) : originResult
                        return (
                                <li key={index}>{
                                    `${price}${item.unit}${item.name}`
                                }</li>
                            )
                        }
                    )
                }   
            </ul>
        </>
    )
}
const HowMuchYouCost = () => {
    const [cost, setCost] = useState('');
    const [showResult, setShowResult] = useState(false);
    const handleInputChange = (e: any) => {
        setCost(e.target.value);
    }
    const handleSubmit = () => {
        setShowResult(true);
    }
    return (
        <div className="p-4">
            <h1>How Much You Cost</h1>
            <div className="flex items-center">
                <CostInput val={cost} handleInputChange={handleInputChange} />
                <button
                    className="px-2 rounded-md bg-cyan-400 h-8 text-slate-50 font-bold ml-2"
                    onClick={() => handleSubmit()}>Submit</button>
            </div>
            {showResult && <CostResult cost={cost} />}
        </div>
    )
}
export default HowMuchYouCost