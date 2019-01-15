import * as React from 'react';
import StyledTag from '../styles/StyledTag';
import ThatQuery, { THAT_QUERY } from './ThatQuery';
import ThatPageStyles from './ThatPageStyles';

/**
 * Component status:
 * TODO: Link to skills and tags
 * TODO: Link to skills and tags
 * TODO add loading
 * TODO add error
 */

// TODO improve typing on this: make non-optional where appropriate
interface ThatCardProps {
  id: string;
}

const ThatCard = ({ id }: ThatCardProps) =>
  <ThatPageStyles>
    <ThatQuery
      query={THAT_QUERY}
      variables={{ id }}
    >
      {
        ({ data: { that } }) =>
          <>
            <img src={that.largeImage} alt={that.title}/>
            <h4>{that.title}</h4>
            <p>{that.description}</p>
            <p className="difficulty">
              Difficulty: <span>{that.difficulty}</span>
            </p>
            <div className="tags">
              {
                that.tags && that.tags
                  .map(tag => <StyledTag>{tag.name}</StyledTag>)
              }
            </div>
            <div className="skills">
              {
                that.skills && that.skills
                  .map(skill => <StyledTag>{skill.name}</StyledTag>)
              }
            </div>
          </>
      }
    </ThatQuery>
  </ThatPageStyles>;

export default ThatCard;
