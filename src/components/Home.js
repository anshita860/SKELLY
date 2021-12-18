import styled from 'styled-components'
import React from 'react'
import First from './First'
import Second from './Second'
import Third from './Third'
import Sec from './Sec'

function Home() {
    return (
        <div>
        <Container1>
            <Sec />
        </Container1>
        <Container2>
            <First />
            <Second />
            <Third />
        </Container2>
        </div>
    )
}
const Container1=styled.div`
    display: flex;
    flex-direction: row;
`;
const Container2=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export default Home

