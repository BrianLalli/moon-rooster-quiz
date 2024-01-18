import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import supabase from '../../api/supabaseClient';
import { PageCenter, CenterCardContainer } from '../../styles/Global';
import { quizTopics } from '../../data/quizTopics'; // Update this path to where your quizTopics are defined

// Interface for score
interface Score {
    id: number;
    username: string;
    points: number;
    topic: string;
}

// Styled components
const LeaderboardHeading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText}; /* Use the primaryText color from the theme */
`;

const SortButton = styled.button`
  background-color: #1c75bc;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #61DBFB;
  }
`;

const TopicSelector = styled.select`
  padding: 8px;
  margin-bottom: 15px;
`;

const LeaderboardContainer = styled.div`
  padding: 20px;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MotionLeaderboardList = styled(motion.ul)`
  list-style: none;
  padding: 0;
`;

const MotionLeaderboardItem = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Score = styled.span`
  font-weight: bold;
  color: #1c75bc;
`;

const Username = styled.span`
  font-weight: normal;
  color: #333;
  margin-right: 10px;
`;

const LoadingText = styled.p`
  text-align: center;
`;

// Variants for framer-motion
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Leaderboard functional component
const Leaderboard: React.FC = () => {
    const [scores, setScores] = useState<Score[]>([]);
    const [selectedTopic, setSelectedTopic] = useState(quizTopics[0].title);
    const [loading, setLoading] = useState<boolean>(true);
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        const fetchScores = async () => {
            setLoading(true);
            let { data: scores, error } = await supabase
                .from('scores')
                .select('*')
                .eq('topic', selectedTopic) // Filter by the selected topic
                .order('points', { ascending: sortOrder === 'asc' });

            if (error) {
                console.error('Error fetching scores:', error);
            } else {
                setScores(scores as Score[] || []);
            }

            setLoading(false);
        };

        fetchScores();
    }, [sortOrder, selectedTopic]);

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <PageCenter light justifyCenter>
            <CenterCardContainer>
                <LeaderboardHeading>Leaderboard</LeaderboardHeading>
                <TopicSelector value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
                  {quizTopics.map(topic => (
                    <option key={topic.title} value={topic.title}>{topic.title}</option>
                  ))}
                </TopicSelector>
                <SortButton onClick={toggleSortOrder}>
                    Sort by Points {sortOrder === 'asc' ? '↑' : '↓'}
                </SortButton>
                {loading ? (
                    <LoadingText>Loading...</LoadingText>
                ) : (
                    <LeaderboardContainer>
                        <MotionLeaderboardList variants={listVariants} initial="hidden" animate="visible">
                            {scores.map((score, index) => (
                                <MotionLeaderboardItem 
                                    key={score.id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Username>{index + 1}. {score.username}</Username>
                                    <Score>{score.points} pts</Score>
                                </MotionLeaderboardItem>
                            ))}
                        </MotionLeaderboardList>
                    </LeaderboardContainer>
                )}
            </CenterCardContainer>
        </PageCenter>
    );
};

export default Leaderboard;
