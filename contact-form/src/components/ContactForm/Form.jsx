import styles from './Form.module.css'
import Button from '../Buttons/Button';
import { MdMessage } from "react-icons/md"
import {AiOutlinePhone} from "react-icons/ai"
import {AiFillMail} from "react-icons/ai"
const Form = () => {
    return (
        <section className={styles.container}>
            <div className={styles.form}>
                <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
                <Button text="VIA SUPPORT CALL" icon={<AiOutlinePhone fontSize="24px"/>}/> 
                </div>
                <Button 
                isOutline={true} text="VIA MAIL SUPPORT" icon={<AiFillMail fontSize="24px"/>}/>



            </div>
            <div className={styles.image}></div>
        </section>
    );
}

export default Form;
