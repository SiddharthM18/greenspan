import pandas as pd
import matplotlib.pyplot as plt


def main():
    data = [i for i in range(0,200,1)]
    df = pd.DataFrame(data)
    plt.plot(df)
    plt.savefig('../../public/images/calltest.png')
    

if __name__ == '__main__':
    main()