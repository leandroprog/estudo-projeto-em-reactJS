import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repósitorio" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/4483666?s=460&u=80e553025b11af70c0764ff71b01bdc9e16007f0&v=4"
            alt="Leandro Rocha"
          />
          <div>
            <strong>Roketseat/unform</strong>
            <p>Testando a descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/4483666?s=460&u=80e553025b11af70c0764ff71b01bdc9e16007f0&v=4"
            alt="Leandro Rocha"
          />
          <div>
            <strong>Roketseat/unform</strong>
            <p>Testando a descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/4483666?s=460&u=80e553025b11af70c0764ff71b01bdc9e16007f0&v=4"
            alt="Leandro Rocha"
          />
          <div>
            <strong>Roketseat/unform</strong>
            <p>Testando a descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
