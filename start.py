import sys, time, os


def m(s):
    for c in s + '\n':
        sys.stdout.write(c)
        sys.stdout.flush()
        time.sleep(0.035)

m('\x1b[00m\033[041m Sedang Mengaktifkan bot...  \033[00m')
m("berhasil menyalakan bot. . . ")
os.system("node bot.js")
m("EXIT BOT")
