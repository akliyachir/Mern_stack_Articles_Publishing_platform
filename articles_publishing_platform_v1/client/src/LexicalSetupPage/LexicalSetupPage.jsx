import './LexicalSetupPage.css'
import Editor from '../lexical_rich_text_config/src/Editor'
import '../lexical_rich_text_config/src/themes/ExampleTheme'
import '../lexical_rich_text_config/src/styles.css'


// -- lexical import 

// -- function component
export default function LexicalSetupPage() {


 return (
  <div className='LexicalSetupPage'>
   <div className="LexicalSetupPageContent">
    {/* lexical */}
    <Editor />
    {/* lexical */}
   </div>
  </div>
 )
}