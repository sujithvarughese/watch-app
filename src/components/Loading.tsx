import React, {useEffect, useState} from 'react';
import {Text} from '@mantine/core';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getProgressColor = () => {
    if (progress < 30) return '#FF5252';
    if (progress < 60) return '#FFC107';
    return '#4CAF50';
  };

  const getMessage = () => {
    if (progress <=20) return 'Starting analysis...';
    if (progress <= 40) return 'Processing images...';
    if (progress <= 60) return 'Analyzing watch details...';
    if (progress < 100) return 'Generating results...';
    if (progress === 100) return 'Analysis complete!';
    return '';
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    }}>
      <div style={{
        width: '300px',
        height: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: getProgressColor(),
          transition: 'width 0.1s ease-out',
        }}/>
      </div>
      <Text style={{
        paddingTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.5,
      }}>{progress}%</Text>
      <Text style={{
        fontSize: 16,
        zIndex: 100,
      }}>{getMessage()}</Text>
    </div>
  );
}
