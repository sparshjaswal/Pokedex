import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { getCamelCaseString } from '../../../constants/utils';
import ColorfulTag from '../colorfulTags/colorfulTag';
import "./propertyCard.scss";
import "../../../styles/common.scss";
import { PropertyCardProps } from '../../../constants/pokemon.types';

const PropertyCard: React.FC<PropertyCardProps> = React.memo(({ speciesData, data, pokemonTypeData }) => {
  return (
    <Grid fluid>
      <Row className="show-grid">
        <Col xs={12} sm={12} lg={6} xl={6}>
          <div className='flex-col'>
            <span className="prop-header">Height</span>
            <div className='prop-header-data'>{data.height}</div>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6}>
          <div className='flex-col'>
            <span className="prop-header">Weight</span>
            <div className='prop-header-data'>{data.weight / 10} Kg</div>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6}>
          <div className='flex-col'>
            <span className="prop-header">Gender(s)</span>
            <div className='prop-header-data'>Male, Female</div>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6}>
          <div className='flex-col'>
            <span className="prop-header">Egg Groups</span>
            <div className='prop-header-data'>
              {speciesData.egg_groups.map((item, index) => (
                <span key={item.name}>
                  {getCamelCaseString(item.name)}
                  {index < speciesData.egg_groups.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="show-grid pt-3">
        <Col xs={12} sm={12} lg={6} xl={6}>
          <div className='flex-col'>
            <span className="prop-header">Abilities</span>
            <div className='prop-header-data'>
              {data.abilities.map((item, index) => (
                <span key={item.ability.name}>
                  {getCamelCaseString(item.ability.name)}
                  {index < data.abilities.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6}>
          <div className='flex-col'>
            <span className="prop-header">Types</span>
            <div className='prop-header-data type-wrap'>
              {data.types.map((item) => (
                <ColorfulTag key={item.type.name} className="pr-1" type={item.type.name} text={getCamelCaseString(item.type.name)} />
              ))}
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={12} xl={12}>
          <div className='flex-col'>
            <span className="prop-header">Weak Against </span>
            <div className='prop-header-data type-wrap'>
              {pokemonTypeData.damage_relations.double_damage_from.map((item: { name: any }) => (
                <ColorfulTag key={item.name} className="pr-1" type={item.name} text={getCamelCaseString(item.name)} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  );
});

export default PropertyCard;