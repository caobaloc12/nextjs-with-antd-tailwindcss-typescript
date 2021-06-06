import { Button, Divider, message } from 'antd'
import Paragraph from 'antd/lib/typography/Paragraph'

const HomePage = () => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-lg font-medium">
        Next JS Starter with Ant Design, Typescript, TailwindCSS and
        Emotion/styled
      </h1>
      <Divider />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        repellendus dolorum quasi praesentium, veniam asperiores, ad iste
        quaerat, quia eaque necessitatibus distinctio vitae nam repudiandae!
        Voluptas ratione suscipit voluptatum? Quisquam, nam. Odit reiciendis
        porro, officiis saepe molestias adipisci suscipit molestiae maxime
        possimus minus corrupti amet incidunt iste itaque repellendus eligendi.
      </Paragraph>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        reiciendis ad sint fuga. At ea, eligendi deserunt ad suscipit saepe
        sapiente dolores non cupiditate quas delectus, molestias sed dicta
        accusantium illum! Beatae, expedita similique omnis animi quo asperiores
        autem tempore eaque explicabo ullam aliquam sequi libero non quis
        consequuntur quod ad incidunt voluptate tempora nihil dignissimos iusto
        amet nam? Debitis quaerat eaque, explicabo, cumque dolore, itaque
        distinctio natus in aspernatur nostrum vitae. Officiis nulla qui
        quisquam sequi cum, exercitationem necessitatibus animi, ipsa voluptatum
        dolorum, accusantium mollitia repudiandae! Error quisquam repudiandae
        eligendi sequi dolores ipsum, aliquid porro suscipit animi iusto, quasi
        explicabo ullam. Molestiae fuga ea libero eos corrupti, iure vero veniam
        nisi magnam, tempora repellat nulla sed excepturi at ducimus quam
        necessitatibus quis dolorum aliquam. Tempora excepturi sint recusandae
        sit quas accusamus quisquam, perferendis dolores atque laboriosam
        reprehenderit officiis, reiciendis nulla consequuntur natus temporibus
        corrupti est distinctio in architecto sequi.
      </Paragraph>
      <div className="space-x-2">
        <Button type="primary" onClick={() => message.info('Button clicked!')}>
          Click me
        </Button>
        <Button type="link">Learn more</Button>
      </div>
    </div>
  )
}

export default HomePage
