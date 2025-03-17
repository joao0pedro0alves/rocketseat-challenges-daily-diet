import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'

import { FeedbackContainer, FeedbackHeader, FeedbackImage } from './styles'

import inDietIllustration from '@/assets/illustration/in-diet-illustration.png'
import outDietIllustration from '@/assets/illustration/out-diet-illustration.png'

export function Feedback() {
  const inDiet = true

  return (
    <FeedbackContainer>
      <FeedbackHeader>
        {inDiet ? (
          <Typography variant="h2" color="GREEN_DARK">
            Continue assim!
          </Typography>
        ) : (
          <Typography variant="h2" color="RED_DARK">
            Que pena!
          </Typography>
        )}

        {inDiet ? (
          <Typography style={{ textAlign: 'center' }}>
            Você continua <Typography variant="h4">dentro da dieta.</Typography>{' '}
            Muito bem!
          </Typography>
        ) : (
          <Typography style={{ textAlign: 'center' }}>
            Você <Typography variant="h4">saiu da dieta</Typography> dessa vez,
            mas continue se esforçando e não desista!
          </Typography>
        )}
      </FeedbackHeader>

      <FeedbackImage
        source={inDiet ? inDietIllustration : outDietIllustration}
        width={224}
        height={288}
      />

      <Button title="Ir para a página inicial" />
    </FeedbackContainer>
  )
}
