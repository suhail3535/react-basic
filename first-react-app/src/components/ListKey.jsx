function NamesList() {
    const names = ["Suhail khan", "Aman", "John"];
    return (
        <ul>
            {names.map((name,index) => (
                <li key={index}>{name}</li>///su
            ))}
        </ul>
    );
}

export default NamesList;
