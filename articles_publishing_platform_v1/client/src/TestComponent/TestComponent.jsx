import './TestComponent.css';
import '../lexicalSource/src/styles.css';
import Editor from '../lexicalSource/src/Editor';

export default function TestComponent() {
  return (
    <div className='TestComponent'>
      <Editor />
    </div>
  );
}
