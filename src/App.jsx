import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import SectionTitle from './components/SectionTitle';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

export default function App() {
  const projects = [
    {
      title: 'Frontend + BackEnd (Php/Laravel)',
      description: 'Projeto desenvolvido para a universidade - Desenvolvimento de Aplicações web',
      link: 'https://github.com/TiagoCruz1224/TiagoCruz1224',
    },
    {
      title: 'Criação de site "NBA"',
      description: 'Projeto desenvolvido para a universidade - Introdução ao Desenvolvimento Web',
      link: 'https://github.com/TiagoCruz1224/NBA_FRONTEND',
    },
    {
      title: 'Criação de um site para a minha marca pessoal',
      description: 'Projeto desenvolvido para a universidade - Portefolio Pessoal',
      link: 'https://github.com/TiagoCruz1224/NBA_FRONTEND',
    },
  ];

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <Header menuVisible={menuVisible} toggleMenu={toggleMenu} />
      <div className={`flex flex-col ${menuVisible ? 'menu-open' : 'menu-closed'}`}>
        <div class='bg-gray-200'>
          <div className='body container mx-auto'>
            {/* Seção "Sobre Mim" */}
            <div className='mt-10'>
              <SectionTitle icon={'💡'} text={'Sobre Mim'} />
              <section
                className='About grid grid-cols-2 items-center gap-8 mt-8 max-[900px]:grid-cols-1'
                id='about'
              >
                <p className='mt-4 ml-10 mr-10 text-center text-xl'>
                  Olá!
                  <br /> Chamo-me Tiago Cruz, tenho 20 anos e estou empenhado em seguir uma carreira
                  no desenvolvimento web. Atualmente, sou estudante na Universidade de
                  Trás-os-Montes e Alto Douro (UTAD), no 3º ano do curso de Comunicação e
                  Multimedia. <br />
                  Durante o meu percurso académico, adquiri conhecimentos em HTML, CSS, PHP e
                  Laravel, construindo uma base sólida em desenvolvimento web.{' '}
                </p>
                <p className='mt-4 ml-10 mr-10 text-center text-xl'>
                  No momento, estou a aprofundar os meus conhecimentos em React, uma tecnologia que
                  promete expandir as minhas habilidades para novos horizontes. <br />
                  Estou entusiasmado com os desafios e oportunidades que o desenvolvimento web
                  oferece. Acredito que a combinação de criatividade, aprendizado contínuo e
                  dedicação são essenciais para o sucesso nesta área dinâmica. Estou ansioso para
                  explorar novas possibilidades e ver onde esta jornada de desenvolvimento web me
                  levará!
                </p>
              </section>
            </div>
            <SectionTitle icon={'📚'} text={'Skills'} className={'mt-50'} />
            <div
              className='flex flex-wrap w-full mx-auto items-center justify-evenly h-full mt-10'
              id='skills'
            >
              <Card
                title='HTML'
                description={
                  'Comecei a trilhar o caminho do desenvolvimento web na universidade, explorando o poder do HTML para estruturar conteúdo e criar páginas envolventes.'
                }
              />
              <Card
                title='CSS'
                description={
                  'Desde os primeiros passos na programação, descobri em CSS a arte de dar vida aos layouts, moldando designs únicos e responsivos para a web.'
                }
              />
              <Card
                title='JAVASCRIPT'
                description={
                  'Iniciei esta jornada de codificação com JavaScript logo apos o html e o css. Apartir dai comecei o criar paginas interativas e dinamicas com muita facilidade!'
                }
              />
              <Card
                title='REACT.JS'
                description={
                  'Ainda na jornada para aprender mais sobre esta biblioteca de javascript...'
                }
              />
              <Card
                title='PHP'
                description={
                  'Como iniciante em PHP, mergulho no backend, explorando as diversas capacidades existentes.'
                }
              />
            </div>
            {/* Seção "Portfólio" */}
            <section className='Portfolio mt-50 pb-10' id='portfolio'>
              <SectionTitle icon={'📚'} text={'Os Meus Trabalhos'} />
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  className='Project-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div
                    id={`project-${index}`}
                    className='Project-box mt-4 p-4 bg-hsl-softgray border-2 border-black rounded transition-transform hover:scale-95 ml-10 mr-10'
                  >
                    <h3 className='text-xl font-bold'>{project.title}</h3>
                    <p className='mt-2'>{project.description}</p>
                  </div>
                </a>
              ))}
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
