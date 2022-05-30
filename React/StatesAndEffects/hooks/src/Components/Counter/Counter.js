function Counter() {

    let quantity = 10;

    function upQuantity(){
        quantity += 1;
        document.getElementById("counter-box").innerHTML = quantity;
    };

    return (
        <div>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </div>
    );
};

export default Counter;