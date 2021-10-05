
import React, {useState} from 'react';
import * as Styled from './styles';


/* IMAGENS */
import Imagem from '../../Imgs/filter.png';
import futebol from '../../Imgs/futebol.jpg';
import viagem from '../../Imgs/viagem.png';
import cinema from '../../Imgs/cinema.png';
import lanche from '../../Imgs/lanche.jpg';
import prova from '../../Imgs/prova.jpg';
import academia from '../../Imgs/academia.jpg';
import compra from '../../Imgs/compra.jpg';
import trabalho from '../../Imgs/trabalho.png';



/* COMPONENTES */
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';


function Home() {

  const [filterActive, functionFilter] = useState();

  return (
    <Styled.Container>
      <Header />
       <Styled.ContainerFilter>
       <button type='button' onClick={() => functionFilter('todos')}>
       <Filter title="Todos" img={Imagem} actived={filterActive == 'todos'}/>
       </button>

       <button type='button' onClick={() => functionFilter('hoje')}>
       <Filter title="Hoje" img={Imagem} actived={filterActive == 'hoje'}/>
       </button>
       
       <button type='button' onClick={() => functionFilter('semana')}>
       <Filter title="Semana" img={Imagem} actived={filterActive == 'semana'}/>
       </button>

       <button type='button' onClick={() => functionFilter('mes')}>
       <Filter title="Mês"  img={Imagem} actived={filterActive == 'mes'}/>
       </button>
      
       </Styled.ContainerFilter>

       <Styled.ContainerCard>
        <TaskCard img={futebol} title="Futebol"/>
        <TaskCard img={viagem} title="Viagem"/>
        <TaskCard img={academia} title="Academia"/>
        <TaskCard img={lanche} title="Lanche"/>
        <TaskCard img={prova} title="Prova"/>
        <TaskCard img={trabalho} title="Trablho"/>
        <TaskCard img={cinema} title="Cinema"/>
        <TaskCard img={compra} title="Compra"/>
       </Styled.ContainerCard>


      <Footer />
    </Styled.Container>
  )
}
export default Home;