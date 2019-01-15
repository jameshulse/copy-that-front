import * as React from 'react';
import Link from 'next/link';
import { That } from '../../schema';
import ThatCardStyles from './ThatCardStyles';
import StyledTag from '../styles/StyledTag';

type PartialThat = Partial<That>;

// TODO improve typing on this: make non-optional where appropriate
interface ThatCardProps {
  that: PartialThat;
}

const ThatCard = ({ that }: ThatCardProps) =>
  <ThatCardStyles>
    <Link href={{
      pathname: '/that',
      query: { id: that.id },
    }}>
      <a>
        <div>
          <img src={that.image} alt={that.title}/>
          <h4>{that.title}</h4>
          <div className="tags">
            {
              that.tags && that.tags
                .map(tag => <StyledTag>{tag.name}</StyledTag>)
            }
          </div>
        </div>
      </a>
    </Link>
  </ThatCardStyles>;

export default ThatCard;
