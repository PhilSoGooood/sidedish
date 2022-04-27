import {SideDishContentsList} from "components";
import {StyledSideDishContents} from "./SideDishContents.styled";

function SideDishContents({openModal}) {
  return (
    <StyledSideDishContents>
      <ul>
        <SideDishContentsList openModal={openModal} />
      </ul>
    </StyledSideDishContents>
  );
}

export {SideDishContents};
