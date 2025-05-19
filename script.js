document.getElementById('connectWallet').addEventListener('click', async () => {
  try {
    const provider = window.phantom?.solana;
    if (!provider || !provider.isPhantom) {
      alert("Phantom yüklü değil!");
      return;
    }

    const resp = await provider.connect();
    document.getElementById('walletAddress').innerText = `Bağlandi: ${resp.publicKey.toString()}`;
  } catch (err) {
    console.error(err);
    alert("Bağlanti reddedildi.");
  }
});
