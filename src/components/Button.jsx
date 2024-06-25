const Button = ({text, color}) => {
    const phone=["apple", "galaxy"]
    return (
        <>
            <button type="button" className={` text-white rounded p-1 px-2 ${color}`}>
                {text}
            </button>
            <ul>
                {phone.map((item) =>(
                    <li>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Button