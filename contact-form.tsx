import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>お問い合わせ</CardTitle>
          <CardDescription>ご質問やご相談がございましたら、お気軽にお問い合わせください。</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">お名前</Label>
            <Input id="name" placeholder="山田太郎" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" type="email" placeholder="example@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">件名</Label>
            <Input id="subject" placeholder="お問い合わせの件名" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">お問い合わせ内容</Label>
            <Textarea
              id="message"
              placeholder="お問い合わせ内容をご記入ください..."
              className="min-h-[120px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            送信する
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
