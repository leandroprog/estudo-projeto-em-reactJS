import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/4483666?s=460&u=80e553025b11af70c0764ff71b01bdc9e16007f0&v=4" />
          <div>
            <strong>RocketSeat</strong>
            <p>Testete</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>123</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>123</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>123</strong>
            <span>Issues Abertos</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="ss">
          <div>
            <strong>dad</strong>
            <p>dasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
