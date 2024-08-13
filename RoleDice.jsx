import styled from "styled-components";
const RoleDice = ({roleDice, currentDice}) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${(currentDice)}.png`} alt="dice1"/>
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
 display:flex;
 align-items:center;
 margin-top:40px;
 flex-direction:column;

 .dice{
 cursor: pointer;
 }
 p{
   font-size:14px;
 }
`