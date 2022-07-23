import Button from './Button'
import Section from './Section'

const Contactme = () => {
    const SendMessage = e => {
        e.preventDefault()
        let name = e.target.elements.name.value
        let email = e.target.elements.email.value
        let subject = e.target.elements.subject.value
        let message = e.target.elements.message.value
        let mail = `mailto:aminyousefnejad28@gmail.com?subject=${subject}&body=${message}`

        window.location = mail
    }
    return (
        <Section title="تماس با من" className="w-full items-center">
            <div id="contact">
                <form
                    className="flex flex-col items-center gap-4"
                    onSubmit={SendMessage}
                >
                    <p className="w-400 text-center text-light-gray">
                        در حال حاضر آماده دریافت پیشنهادات کاری شما عزیزان هستم
                        در خصوص موضوعات دیگه هم راحت باشید چون در صندوق ورودی من
                        به روی همه بازه .
                    </p>
                    <input
                        type="text"
                        name="name"
                        placeholder="نام "
                        required
                        className="text-light-gray p-3"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="ایمیل"
                        required
                        className="text-light-gray p-3"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="موضوع"
                        required
                        className="text-light-gray p-3"
                    />
                    <textarea
                        name="message"
                        placeholder="متن پیام"
                        required
                        className="text-light-gray p-3 h-32"
                    />
                    <Button
                        text="ارسال پیام"
                        color="primary"
                        borderRadius="5px"
                        type="submit"
                    />
                </form>
            </div>
        </Section>
    )
}
export default Contactme
