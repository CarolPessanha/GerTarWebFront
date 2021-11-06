
import React, {useState , useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api';


/* IMAGENS */
import Imagem from '../../Imgs/filter.png';


/* COMPONENTES */
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';


function Home() {

  const [filterActive, functionFilter] = useState('all');

  const [tasks, setTasks] = useState([]);

  async function loadTasks(){
    await api.get(`/task//filter/${filterActive}/11:11:11:11:11:11`)
    .then(response => {
      setTasks(response.data)
    })
  } 

  useEffect (() => {
    loadTasks();
  }, [filterActive])

  return (
    <Styled.Container>
      <Header />
       <Styled.ContainerFilter>
       <button type='button' onClick={() => functionFilter('all')}>
       <Filter title="Todos" img={Imagem} actived={filterActive == 'all'}/>
       </button>

       <button type='button' onClick={() => functionFilter('today')}>
       <Filter title="Hoje" img={Imagem} actived={filterActive == 'today'}/>
       </button>
       
       <button type='button' onClick={() => functionFilter('week')}>
       <Filter title="Semana" img={Imagem} actived={filterActive == 'week'}/>
       </button>

       <button type='button' onClick={() => functionFilter('month')}>
       <Filter title="Mês"  img={Imagem} actived={filterActive == 'month'}/>
       </button>
      
       </Styled.ContainerFilter>

       <Styled.ContainerCard>
        
        {
        tasks.map(
          t => (
          <TaskCard type={t.type} title={t.title} when={t.when} />
        ))
      }
       </Styled.ContainerCard>
       
      <Footer />
    </Styled.Container>
  )
}
export default Home;

/* 
      <TaskCard img={futebol} title="Futebol"/>
        <TaskCard img={viagem} title="Viagem"/>
        <TaskCard img={academia} title="Academia"/>
        <TaskCard img={lanche} title="Lanche"/>
        <TaskCard img={prova} title="Prova"/>
        <TaskCard img={trabalho} title="Trablho"/>
        <TaskCard img={cinema} title="Cinema"/>
        <TaskCard img={compra} title="Compra"/>
*/