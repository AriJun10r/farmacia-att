import { MedicalServicesRounded } from './Conteudo/icons/medicalCenter';
import './Header.css';
import { useState } from 'react';

function Header() {
  const [senhaConvencional, setSenhaConvencional] = useState('0');
  const [senhaPreferencial, setSenhaPreferencial] = useState('0');
  const [senhaBalcao, setSenhaBalcao] = useState('Balcão - 0');
  const [contadorConvencional, setContadorConvencional] = useState(0);
  const [contadorPreferencial, setContadorPreferencial] = useState(0);
  const [contadorBalcao, setContadorBalcao] = useState(0);

  // Array para armazenar todas as senhas geradas
  const [senhasGeradas, setSenhasGeradas] = useState([]);

  // Função para gerar senhas contínuas
  const gerarSenha = (tipo) => {
    let novaSenha = '';
    if (tipo === 'convencional') {
      const novoContador = contadorConvencional + 1;
      novaSenha = `Conv-${novoContador}`;
      setContadorConvencional(novoContador);
      setSenhaConvencional(novaSenha);
    } else if (tipo === 'preferencial') {
      const novoContador = contadorPreferencial + 1;
      novaSenha = `Pref-${novoContador}`;
      setContadorPreferencial(novoContador);
      setSenhaPreferencial(novaSenha);
    } else if (tipo === 'balcao') {
      const novoContador = contadorBalcao + 1;
      novaSenha = `Balcão - ${novoContador}`;
      setContadorBalcao(novoContador);
      setSenhaBalcao(novaSenha);
    }

    // Adiciona a nova senha ao array de senhas geradas
    setSenhasGeradas((prev) => [...prev, novaSenha]);
  };

  return (
    <div className="header-container">
      <h1 className='header-title'>Farmárcia</h1>
      <div className='header-cep-subcontainer'> 
       {/* <label htmlFor="inputConvencional" className='label'>Senha Convencional </label>
        <input type="text" id='inputConvencional' className='senha_input' value={senhaConvencional} readOnly /> */}
        <button onClick={() => gerarSenha('convencional')} className='header-cep-button'>Senha Convencional</button>

        {/*<label htmlFor="inputPreferencial" className='label'>Senha Preferencial </label>
        <input type="text" id='inputPreferencial' className='senha_input' value={senhaPreferencial} readOnly /> */}
        <button onClick={() => gerarSenha('preferencial')} className='header-cep-button'>Senha Preferencial</button>

       {/*  <label htmlFor="inputBalcao" className='label'>Senha Balcão </label>
       <input type="text" id='inputBalcao' className='senha_input' value={senhaBalcao} readOnly /> */}
        <button onClick={() => gerarSenha('balcao')} className='header-cep-button'>Senha Balcão</button>
      </div>

      <h2 className='h2Senhageradas'>Senhas Geradas:</h2>
      <ul>
        {senhasGeradas.map((senha, index) => (
          <li key={index}>{senha}</li>
        ))}
      </ul>

      <ul className='header-list'>
       {/* <li className='header-list-item-icon'><MedicalServicesRounded /></li>
        <li className='header-list-item'>Fale Conosco</li>
        <li className='header-list-item'>Trabalho Conosco</li>
        <li className='header-list-item'>Entrar</li>*/}
      </ul>
    </div>
  );
}

export default Header;
