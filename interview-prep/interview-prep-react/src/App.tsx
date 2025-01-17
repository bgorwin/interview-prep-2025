import './App.css'
import './components/ParentComponent';
// import { ParentComponent } from './components/ParentComponent';
// import FilteringQuestionComponent from './components/FilteringQuestionComponent';

function Comment({name, time, children}){
  return (
    <section>
      <p>{name} commented at {time}</p>
      <p>This is a comment</p>
      {children}
    </section>
  );
}

function App() {
  return (
    <>
      {/* <ParentComponent /> */}
      {/* <FilteringQuestionComponent /> */}

      <Comment name="Brent" time={(new Date()).toString()}>
        <p>Hello World</p>
        <p>This is a comment</p>
      </Comment>
    </>
  )
}

export default App
