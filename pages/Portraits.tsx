import { Portrait } from '@components/Portrait'

const imgs = [
  'https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic1.abc.es%2Fmedia%2Fpeliculas%2F000%2F019%2F042%2Fcars-2.jpg&nuevoancho=620&medio=abc',
  'https://i.ytimg.com/vi/_hP0vvGJKN4/maxresdefault.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyQz1eHBUXaap0X0wCL1lVlfX7Pwhqy7_2w&usqp=CAU',
]

export default function Portraits() {
  return (
    <div className="CenteredContainer CenteredVerticalAlign">
      <Portrait img={imgs[1]} />
    </div>
  )
}
