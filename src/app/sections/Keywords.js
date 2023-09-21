import { KeywordsWrapper, MaxWidthWrapper } from '../styled-components/KeywordsWrapper';
import KeywordsContainer from '../components/KeywordsContainer';
import Subtitle from '../components/Subtitle';


function Keywords() {
  return (
    <KeywordsWrapper>
      <MaxWidthWrapper>
        <Subtitle>Some Technologies I Use...</Subtitle>
        <KeywordsContainer/>
      </MaxWidthWrapper>
    </KeywordsWrapper>
  );
}



export default Keywords;