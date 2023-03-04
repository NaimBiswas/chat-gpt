import VerticalIconWithHeader from '../VerticalIconWithHeader/VerticalIconWithHeahder';

const HomePageDefaultView = ()  => {
    return(
        <div className=''>
              <h2 className='text-center text-danger chatGPtText'>ChatGPT</h2>
              <div className='row d-flex justify-content-center'>
              <div className='verticalIconWithTitle justify-content-center d-flex col-2 col-lg-3 p-0 col-md-3 col-sm-12'>
                  <VerticalIconWithHeader IsParagraph={false} IconName='far fa-smile-beam' Title='Examples' />
                  <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Explain quantum computing in simple terms' />
                  <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Explain quantum computing in simple terms' />
                  <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Explain quantum computing in simple terms' />
              </div>
              <div className='verticalIconWithTitle justify-content-center d-flex col-2 col-lg-3 p-0 col-md-3 col-sm-12'>
                <VerticalIconWithHeader IsParagraph={false} IconName='fas fa-yin-yang' Title='Capabilities' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Got any creative ideas for a 10 year old’s birthday?' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Got any creative ideas for a 10 year old’s birthday?' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Got any creative ideas for a 10 year old’s birthday?' />
              </div>
              <div className='verticalIconWithTitle justify-content-center d-flex col-2 col-lg-3 p-0 col-md-3 col-sm-12'>
                <VerticalIconWithHeader IsParagraph={false} IconName='fas fa-exclamation-triangle' Title='Limitations' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='How do I make an HTTP request in Javascript?' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='How do I make an HTTP request in Javascript?' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='How do I make an HTTP request in Javascript?' />
              </div>
              </div>
            </div>
    )
}

export default HomePageDefaultView