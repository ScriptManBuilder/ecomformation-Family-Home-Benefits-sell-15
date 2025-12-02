import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Average Yearly Savings',
      description: 'Families save thousands annually through home services, coverage plans, and member-exclusive discounts on everyday purchases',
      value: '$3,200',
      background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)'
    },
    {
      title: 'Home Service Discounts',
      description: 'Members enjoy significantly reduced rates on property maintenance, repairs, and protection compared to regular pricing',
      value: '50%',
      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
    },
    {
      title: 'Member Satisfaction',
      description: 'Our members consistently provide exceptional feedback, demonstrating reliable and proven five-star satisfaction ratings',
      value: '98%',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'Partner Services',
      description: 'Extensive access to home protection, medical programs, identity monitoring, and lifestyle benefits throughout all regions',
      value: '600+',
      background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Protect Your Property, Amplify Your Savings</StatsSectionTitle>
        <StatsSectionDescription>
          See how our elite family benefits program delivers outstanding value and comprehensive peace of mind.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
