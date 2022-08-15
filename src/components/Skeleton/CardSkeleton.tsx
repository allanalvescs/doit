import { Box, Skeleton, SkeletonProps } from "@chakra-ui/react";

interface CardSkeleton extends SkeletonProps {
  repeatCount: number;
}

const CardSkeleton = ({ repeatCount, ...rest }: CardSkeleton) => {
  const howMany = Array.from(Array(repeatCount).keys());

  return (
    <>
      {howMany.map((_) => (
        <Skeleton {...rest} speed={1}>
          <Box w="320px" h="150px" padding="6" />
        </Skeleton>
      ))}
    </>
  );
};

export default CardSkeleton;
