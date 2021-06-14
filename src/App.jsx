import React from 'react'
import styled from '@emotion/styled'
import { StepIndicator, Space, Section, Button } from '@dnb/eufemia/es'

const Layout = styled(Section)`
  display: flex;

  max-width: 71rem;
  margin: 0 auto;
  padding: 1rem 0;

  @media screen and (max-width: 71em) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 40em) {
    padding: 1rem 1rem;
  }
`

export default function App() {
  const [step, setStep] = React.useState(0)

  return (
    <Layout spacing style_type="white">
      <StepIndicator.Sidebar sidebar_id="unique-id-loose" />

      <Space stretch>
        <StepIndicator
          mode="loose"
          sidebar_id="unique-id-loose"
          current_step={step}
          on_change={({ current_step }) => {
            setStep(current_step)
          }}
          data={[
            {
              title: 'Cum odio si bolig bla et ta',
            },
            {
              title:
                'Auctor tortor vestibulum placerat bibendum sociis aliquam nunc sed venenatis massa eget',
            },
            {
              title:
                'Nascetur id odio potenti sem consectetur congue dictum quisque rhonc sed',
              status:
                'loGravida luctus ultrices lacus conubia litora vitae cras euismod inceptos dui nulla et auctor nibh vulputate enim consectetur mi iaculis',
            },
            {
              title: 'Bibendum sociis',
            },
          ]}
          bottom
        />

        <Button
          variant="secondary"
          on_click={() => {
            setStep((step) => {
              if (step >= 3) {
                step = -1
              }
              return step + 1
            })
          }}
        >
          Next step
        </Button>
      </Space>
    </Layout>
  )
}
