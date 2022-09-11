async function connect() {
    if(typeof window.ethereum !== undefined) {
        try {
            console.log("connecting");
            await ethereum.request({method: "eth_requestAccounts"});
        } catch (error) {
            console.log(error);
        }
        document.getElementById("login_button").innerHTML = "connected";
        document.getElementById("swap_button").disabled = false;
    } else {
        document.getElementById("login_button").innerHTML = "Please install MetaMask";
    }
}

document.getElementById("login_button").onclick = connect;