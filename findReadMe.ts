import * as path from "path"
import * as fs from "fs"

export const findReadMe = (dir: string): string | undefined => {
    dir = path.resolve(dir)
    while (true) {
        const fileName = path.join(dir, "readme.md")
        if (fs.existsSync(fileName)) {
            return fileName
        }
        const newDir = path.dirname(dir)
        if (newDir === dir) {
            return undefined
        }
        dir = newDir
    }
}
