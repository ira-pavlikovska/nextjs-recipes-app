import Image from 'next/image'
import styles from './login.module.css'
import {useState, useEffect} from "react";
import Button from "@mui/material/Button";

export default function Home() {

  const [count, setCount] = useState<number>(0);

  // useEffect(() => {
  //   setKeyword('Hi Mister :)')
  // }, [])

  return (
    <div className={styles.main}>
      Login

      <Button
        data-testid={'delete-button'}
        variant="outlined"
        style={{float: 'right', marginRight: 20, marginTop: 20}}
        onClick={()=> setCount(count + 1)}
      >Button clicked - {count}</Button>
    </div>
  )
}
