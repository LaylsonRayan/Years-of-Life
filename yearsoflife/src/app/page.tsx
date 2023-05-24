import React, { useState } from 'react';

const VerificadorIdade: React.FC = () => {
  const [ano, setAno] = useState<number>(0);
  const [genero, setGenero] = useState<string>('');
  const [idade, setIdade] = useState<number>(0);
  const [foto, setFoto] = useState<string>('');

  const handleVerificar = () => {
    const data = new Date();
    const anoAtual = data.getFullYear();
    const idadeCalculada = anoAtual - ano;

    if (!ano || ano > anoAtual) {
      alert('Verifique os dados e tente novamente');
    } else {
      const fsex = document.getElementsByName('radsex') as NodeListOf<HTMLInputElement>;

      if (fsex[0].checked) {
        setGenero('Homem');
        if (idadeCalculada >= 0 && idadeCalculada <= 10) {
          setFoto('foto-bebe-m.png');
        } else if (idadeCalculada < 21) {
          setFoto('foto-jovem-m.png');
        } else if (idadeCalculada < 50) {
          setFoto('foto-adulto-m.png');
        } else {
          setFoto('foto-idoso-m.png');
        }
      } else if (fsex[1].checked) {
        setGenero('Mulher');
        if (idadeCalculada >= 0 && idadeCalculada <= 10) {
          setFoto('foto-bebe-f.png');
        } else if (idadeCalculada < 21) {
          setFoto('foto-jovem-f.png');
        } else if (idadeCalculada < 50) {
          setFoto('foto-adulto-f.png');
        } else {
          setFoto('foto-idoso-f.png');
        }
      }

      setIdade(idadeCalculada);
    }
  };

  return (
    <main>
      <section className="bg-white rounded-xl p-4 w-[500px] m-auto shadow-[5px_5px_10px_black]">
        <div className="text-center p-2">
          {idade ? `Detectamos ${genero} com ${idade} anos` : 'Preencha os dados acima para ver o resultado!'}
        </div>
        <div className="rounded-[50%] w-[150px] h-[150px]">
          {foto && <img src={foto} alt={`foto de ${genero}`} />}
        </div>
        <div>
          <p>
            Ano de nascimento:
            <input type="number" name="txtano" id="txtano" min="8" value={ano} onChange={(e) => setAno(Number(e.target.value))} />
          </p>
          <p>
            Sexo:
            <input type="radio" name="radsex" id="masc" checked />
            <label htmlFor="masc">Masculino</label>
            <input type="radio" name="radsex" id="fem" />
            <label htmlFor="fem">Feminino</label>
          </p>
          <p>
            <input type="button" value="Verificar" onClick={handleVerificar} />
          </p>
        </div>
      </section>
      <footer className="text-white text-center italic">
        <p>&copy; Curso em video</p>
      </footer>
    </main>
  )
}